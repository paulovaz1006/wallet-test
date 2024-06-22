import { ExtractUseCase } from "../../modules/extract/extract.useCase";
import { ExtractRepository } from "../../repository/extract.repository";

jest.mock("../../repository/extract.repository");

describe("ExtractUseCase", () => {
  let extractUseCase: ExtractUseCase;
  let extractRepository: jest.Mocked<ExtractRepository>;

  beforeEach(() => {
    extractRepository = new ExtractRepository() as jest.Mocked<ExtractRepository>;
    extractUseCase = new ExtractUseCase();
    (extractUseCase as any).extractRepository = extractRepository;
  });

  it("should return 'extract not found'", async () => {
    const result = await extractUseCase.getExtract("12345");
    expect(result).toEqual("Extract not found");
  });

  it("should return data of getExtract", async () => {
    const mockResponse = { 
      id: "1",  
      description: "",
      typeTransaction: "2",
      user_id: "12345",
      amount: 100 
    };

    extractRepository.findExtract.mockResolvedValue(mockResponse);

    const result = await extractUseCase.getExtract("1");

    expect(result).toEqual(mockResponse);
    expect(extractRepository.findExtract).toHaveBeenCalledWith("1");
  });

  it("should save data and return result", async () => {
    const mockPayload = {
      description: "",
      typeTransaction: "2",
      user_id: "12345",
      amount: 100
    };

    const mockResponse = { id: "1", ...mockPayload };
    extractRepository.save.mockResolvedValue(mockResponse);

    const result = await extractUseCase.saveData(mockPayload);

    expect(result).toEqual(mockResponse);
    expect(result).toHaveProperty("description", "");
    expect(result).toHaveProperty("typeTransaction", "2");
    expect(result).toHaveProperty("user_id", "12345");
    expect(result).toHaveProperty("amount", 100);
    expect(extractRepository.save).toHaveBeenCalledWith(mockPayload);
  });
});
