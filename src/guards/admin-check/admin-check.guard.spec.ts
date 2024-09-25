import { AdminCheckGuard } from './admin-check.guard';

describe('AdminCheckGuard', () => {
  it('should be defined', () => {
    expect(new AdminCheckGuard()).toBeDefined();
  });
});
