import { useHealth } from "../hooks/useHealth";

export function HealthCheckPage() {
  const { data, error, loading, refetch } = useHealth();

  return (
    <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1>Health Check</h1>

      {loading ? <p>Loading…</p> : null}

      {error ? (
        <section>
          <p style={{ color: "crimson" }}>Error: {error}</p>
          <button type="button" onClick={() => void refetch()}>
            Retry
          </button>
        </section>
      ) : null}

      {data ? (
        <section>
          <p>
            <strong>success:</strong> {String(data.success)}
          </p>
          <p>
            <strong>message:</strong> {data.message}
          </p>
          <button type="button" onClick={() => void refetch()}>
            Refresh
          </button>
        </section>
      ) : null}
    </main>
  );
}

