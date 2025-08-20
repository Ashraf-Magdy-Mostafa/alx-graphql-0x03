import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  const FallbackUI: React.FC = () => (
    <div className="text-red-500 p-4">
      Something went wrong. Please try again later.
    </div>
  );
  return (
    <ApolloProvider client={client}>
      <ErrorBoundary errorComponent={<FallbackUI />}>
        <Component {...pageProps} />
      </ErrorBoundary>

    </ApolloProvider>
  )
}