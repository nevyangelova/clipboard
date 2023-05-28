const crypto = require("crypto");
const { deterministicPartitionKey } = require("./challenge.js");

describe("deterministicPartitionKey", () => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  it("should return the trivial partition key when event is null or undefined", () => {
    expect(deterministicPartitionKey(null)).toBe(TRIVIAL_PARTITION_KEY);
    expect(deterministicPartitionKey(undefined)).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("should return the provided partition key when event has a valid partitionKey property", () => {
    const event = {
      partitionKey: "customPartitionKey"
    };
    expect(deterministicPartitionKey(event)).toBe(event.partitionKey);
  });

  it("should generate a deterministic partition key when event does not have a partitionKey property", () => {
    const event = {
      property1: "value1",
      property2: "value2"
    };
    const data = JSON.stringify(event);
    const expectedPartitionKey = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(expectedPartitionKey);
  });

  it("should hash the candidate partition key when its length exceeds the MAX_PARTITION_KEY_LENGTH", () => {
    const longPartitionKey = "a".repeat(MAX_PARTITION_KEY_LENGTH + 1);
    const hashedPartitionKey = crypto.createHash("sha3-512").update(longPartitionKey).digest("hex");
    expect(deterministicPartitionKey({ partitionKey: longPartitionKey })).toBe(hashedPartitionKey);
  });
});
