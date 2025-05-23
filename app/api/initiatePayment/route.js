import { NextResponse } from 'next/server';
import crypto from 'crypto';
import axios from 'axios';

export async function POST(request) {
  try {
    const { amount, transactionId, redirectUrl } = await request.json();
    //console.log(await request.json());
    

    // ✅ Ensure all values are provided
    if (!amount || !transactionId || !redirectUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }


    // ✅ Create payload in correct format
    const payload = {
      merchantId: process.env.PHONEPE_MERCHANT_ID,
      merchantTransactionId:transactionId,
      amount: parseInt(amount), // Must be in paise
      redirectUrl,
       redirectMode: "REDIRECT",
      callbackUrl: "https://swamijitrust.vercel.app/api/demo",
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    };



    // ✅ Encode to base64
    const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString('base64');



    // ✅ Compute X-VERIFY using correct path
    const stringToHash = payloadBase64 + '/pg/v1/pay' + process.env.PHONEPE_SALT_KEY;
    const xVerify =
      crypto.createHash('sha256').update(stringToHash).digest('hex') +
      '###' +
      process.env.PHONEPE_SALT_INDEX;

    // ✅ Make POST request to PhonePe API
    const response = await axios.post(
      `https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay`,
      { request: payloadBase64 },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': xVerify,
          'X-MERCHANT-ID': process.env.PHONEPE_MERCHANT_ID,
        },
      }
    );

    // ✅ Return response to frontend
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Payment Init Error:', error?.response?.data || error.message);
    return NextResponse.json(
      {
        error: error?.response?.data || 'Payment initiation failed',
      },
      { status: 500 }
    );
  }
}
