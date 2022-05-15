import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaBackupService } from './categoria_backup.service';

describe('CategoriaBackupService', () => {
  let service: CategoriaBackupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaBackupService],
    }).compile();

    service = module.get<CategoriaBackupService>(CategoriaBackupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
