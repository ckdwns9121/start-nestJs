import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /////////여기부터 코드 예제//////////

  // 2+2 는 4가 되는지 테스트(기본예제) - should be 4 Test -> true
  it('should be 4', () => {
    expect(2 + 2).toEqual(4);
  });

  // should be 8 test - false 가 나올 예정
  it('should be 8', () => {
    expect(2 + 2).toEqual(8);
  });
});
