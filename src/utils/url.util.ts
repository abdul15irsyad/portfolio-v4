export const queryString =
  (searchParams: any) => (name: string, value: string) => {
    const params = new URLSearchParams(searchParams as any);
    if (value === '') params.delete(name);
    else params.set(name, value);
    return params.toString();
  };
