export default {
	create: () => new Promise(() => {}),
	get: jest.fn(() => Promise.resolve({ data: {} })),
	post: jest.fn(() => Promise.resolve({ data: {} })),
	delete: jest.fn(() => Promise.resolve({ data: {} })),
	patch: jest.fn(() => Promise.resolve({ data: {} })),
};
