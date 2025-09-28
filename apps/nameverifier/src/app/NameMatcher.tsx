import { useState } from 'react';

const NameMatcher = () => {
  const [success, setSuccess] = useState<string>();
  const [failure, setFailure] = useState<string>();
  const [status, setStatus] = useState<boolean>();
  const alphabetNumberMap: Record<string, number> = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 8,
    G: 3,
    H: 5,
    I: 1,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    O: 7,
    P: 8,
    Q: 1,
    R: 2,
    S: 3,
    T: 4,
    U: 6,
    V: 6,
    W: 6,
    X: 5,
    Y: 1,
    Z: 7,
  };
  // Function to reduce a number to single digit
  const reduceToSingleDigit = (num: number): number => {
    while (num > 9) {
      num = num
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
  };

  const calculateNumerology = (text: string) => {
    const total = text
      .toUpperCase()
      .split('')
      .reduce((sum, ch) => sum + (alphabetNumberMap[ch] || 0), 0);

    const singleDigit = reduceToSingleDigit(total + 3);
    if (singleDigit === 1 || singleDigit === 5) {
      setStatus(true);
      setSuccess(
        `${text} is matched with numerology and addition is: ${singleDigit}`
      );
    } else {
      setStatus(false);
      setFailure(
        `${text} is not matched with numerology, addition is: ${singleDigit}`
      );
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary">🚀 Numerology name matcher!🚀</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Enter your name:
          </label>
          <input
            type="text"
            id="nameInput"
            className="form-control"
            onKeyUp={(e) => calculateNumerology(e.target.value)}
            placeholder="Enter name to verify."
            required
          />
        </div>
        {status === true && (
          <div className="alert alert-success">{success}</div>
        )}
        {status === false && (
          <div className="alert alert-danger">{failure}</div>
        )}
      </form>
    </div>
  );
};

export default NameMatcher;
