import { useState, useEffect } from "react";

function useApi(apiFunc, { params = null, immediate = true } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (overrideParams = null) => {
    try {
      setLoading(true);
      setError(null);

      // call API function (from service file)
      const response = await apiFunc(overrideParams || params);
      setData(response);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Run immediately if required (e.g. GET on page load)
  useEffect(() => {
    if (immediate) execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error, refetch: execute };
}

export default useApi;
