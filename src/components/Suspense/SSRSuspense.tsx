import { useState, useEffect, ComponentProps, Suspense } from 'react';

type Props = ComponentProps<typeof Suspense>;

// @see https://jbee.io/react/error-declarative-handling-1/#server-side-rendering
export function SSRSuspense({ fallback, children, ...props }: Props) {
  const [isMounted, setIsMounted] = useState<boolean>();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return (
    <Suspense fallback={fallback} {...props}>
      {children}
    </Suspense>
  );
}