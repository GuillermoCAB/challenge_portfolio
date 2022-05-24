import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { authSelector } from "@/redux/slices";
import { useRouter } from "next/router";
import BasicLayout from "./basic-layout";

function PrivateLayout({ title = "", children, ...props }) {
  const { apiToken } = useAppSelector(authSelector);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!apiToken) {
      router.push(`/login`);
    } else {
      setLoading(false);
    }
  }, [apiToken]);

  return (
    <BasicLayout title={title} loading={loading} {...props}>
      {children}
    </BasicLayout>
  );
}

export default PrivateLayout;
