"use client";

import React from 'react'
import { getProviders, signIn } from 'next-auth/react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

export default function AuthProviders() {
  const [providers, setProviders] = React.useState<Providers | null>(null)

  React.useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    }

    fetchProviders();
  }, [])

  console.log('providers : ', providers)

  if(providers) {
    return (
      <div>
        {
          Object.values(providers).map(
            (provider: Provider, i) => (
              <button key={i} onClick={() => signIn(provider?.id)}>{provider.id}</button>
            )
          )
        }
      </div>
    )
  }
}
