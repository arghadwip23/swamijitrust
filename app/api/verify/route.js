import { NextResponse } from "next/server";
import crypto from "crypto";
import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const merchantId = process.env.PHONEPE_MERCHANT_ID;
    const transactionId = id;
    const st = `/pg/v1/status/${merchantId}/${transactionId}` + process.env.PHONEPE_SALT_KEY;

    // Correct SHA256 hashing
    const dataSha256 = crypto.createHash("sha256").update(st).digest("hex");
    const checksum = dataSha256 + "###" + process.env.PHONEPE_SALT_INDEX;
    console.log("Checksum:", checksum);

    const options = {
      method: "GET",
      url: `${process.env.PHONEPE_BASE_URL}/pg/v1/status/${merchantId}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId,
      },
    };

    const response = await axios.request(options);
    console.log("PhonePe Response:", response.data);

    if (response.data.code === "PAYMENT_SUCCESS") {
      return NextResponse.json({
        ok:true,
        status: response.data.code,
        transactionId: response.data.data.transactionId,
      }, { status: 200 });
    } else {
      return NextResponse.json({
        ok:true,
        status: "FAIL",
        referenceId: null,
      }, { status: 200 });
    }
  } catch (error) {
    console.error("Error in payment status check:", error);
    return NextResponse.json({
      ok:false,
      status: "SERVER ERROR",
      referenceId: null,
    }, { status: 500 });
  }
}
