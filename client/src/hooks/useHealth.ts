import { useCallback, useEffect, useState } from "react";
import { getHealth } from "../services/api";
import type { HealthResponse } from "../types/api";

type UseHealthState = {
  data: HealthResponse | null;
  error: string | null;
  loading: boolean;
};

export function useHealth() {
  const [state, setState] = useState<UseHealthState>({
    data: null,
    error: null,
    loading: true,
  });

  const fetchHealth = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const data = await getHealth();
      setState({ data, error: null, loading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setState({ data: null, error: message, loading: false });
    }
  }, []);

  useEffect(() => {
    void fetchHealth();
  }, [fetchHealth]);

  return { ...state, refetch: fetchHealth };
}

