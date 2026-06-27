// Extends vitest's expect with @testing-library/jest-dom matchers (toBeInTheDocument, etc.)
// This runs for all test environments; DOM matchers are only useful in jsdom tests.
import "@testing-library/jest-dom/vitest";

// Silence pino output in tests
process.env.LOG_LEVEL = "silent";
process.env.CAREGIVER_TOKEN = process.env.CAREGIVER_TOKEN || "test-caregiver-token";
process.env.AGENT_SECRET_KEY = process.env.AGENT_SECRET_KEY || "SDISLXAAQIOJ6Q33X5NPGZ632RRAPHX52MHMTDJTVSOH2UV5AHNMICXT";
process.env.MOCK_NETWORK = "1";
process.env.STELLAR_NETWORK = "testnet";
process.env.PHARMACY_1_PUBLIC_KEY = process.env.PHARMACY_1_PUBLIC_KEY || "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";
process.env.BILL_PROVIDER_PUBLIC_KEY = process.env.BILL_PROVIDER_PUBLIC_KEY || "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";
process.env.MPP_SECRET_KEY = process.env.MPP_SECRET_KEY || "mock-secret";
process.env.LLM_API_KEY = process.env.LLM_API_KEY || "mock-api-key";

import path from 'path';
process.env.DATA_DIR = path.join(__dirname, `data-test-env-${process.env.VITEST_WORKER_ID || process.env.VITEST_POOL_ID || Math.random().toString(36).slice(2)}`);
process.env.MOCK_NETWORK = '0';
process.env.PORT = '3010';
process.env.PHARMACY_API_URL = `http://localhost:${process.env.PORT}`;
process.env.BILL_AUDIT_API_URL = `http://localhost:${process.env.PORT}`;
process.env.DRUG_INTERACTION_API_URL = `http://localhost:${process.env.PORT}`;
process.env.PHARMACY_PAYMENT_API_URL = `http://localhost:${process.env.PORT}`;
