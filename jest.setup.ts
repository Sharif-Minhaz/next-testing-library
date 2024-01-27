import "@testing-library/jest-dom";
import "whatwg-fetch";

import { server } from "@/mocks/server";

beforeAll(() => {
	// Start the interception.
	server.listen();
});

afterEach(() => {
	// Remove any handlers you may have added
	// in individual tests (runtime handlers).
	server.resetHandlers();
});

afterAll(() => {
	// Disable request interception and clean up.
	server.close();
});
