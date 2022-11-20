import React, {useEffect} from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const route = useRouter();
  useEffect(() => {
    route.push("login");
  });
  return null;
}