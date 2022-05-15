import { Test, TestingModule } from '@nestjs/testing';
import { EstoquesBackupService } from './estoques_backup.service';

describe('EstoquesBackupService', () => {
  let service: EstoquesBackupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstoquesBackupService],
    }).compile();

    service = module.get<EstoquesBackupService>(EstoquesBackupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
