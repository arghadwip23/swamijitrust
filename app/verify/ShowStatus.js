"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

export default function ShowStatus({ transactionId }) {
  const [status, setStatus] = useState(null); // 'success', 'failed', etc.
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      if (!transactionId) {
        setError("Missing transaction ID");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/verify?id=${transactionId}`);
        if (!response.ok) {
          throw new Error("Something went wrong while verifying.");
        }

        const data = await response.json();
        setStatus(data.status); // expect "success" or "failed"
      } catch (err) {
        setError(err.message || "Failed to fetch status.");
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [transactionId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 text-blue-600">
        <Loader2 className="animate-spin" size={20} />
        <span>Verifying donation...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-md text-red-700">
        <AlertTriangle className="w-5 h-5 inline mr-2" />
        <span>Error: {error}</span>
      </div>
    );
  }

  if (status === "PAYMENT_SUCCESS") {
    return (
      <div className="bg-green-50 border border-green-200 p-4 rounded-md text-green-700">
        <CheckCircle2 className="w-5 h-5 inline mr-2" />
        <span>Donation verified successfully! Thank you 🙏</span>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md text-yellow-700">
      <AlertTriangle className="w-5 h-5 inline mr-2" />
      <span>Donation status: {status || "unknown"}.</span>
    </div>
  );
}
