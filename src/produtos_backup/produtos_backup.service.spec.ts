import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosBackupService } from './produtos_backup.service';

describe('ProdutosBackupService', () => {
  let service: ProdutosBackupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosBackupService],
    }).compile();

    service = module.get<ProdutosBackupService>(ProdutosBackupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
