import { ExtractUseCase } from "../../modules/extract/extract.useCase";

jest.mock("../../repository/extract.repository");

describe("ExtractUseCase", () => {
  let extractUseCase: ExtractUseCase;

  beforeEach(async () => {
    extractUseCase = new ExtractUseCase();
  });

  it("should return 'extract not found'", async () => {
    const result = await extractUseCase.execute("12345");
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
    const result = await extractUseCase.execute("1");

    expect(result).toEqual(mockResponse);
  });
});
