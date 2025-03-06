function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const previousFibonacci = fibonacci(n - 1);
    return [
      ...previousFibonacci,
      previousFibonacci[previousFibonacci.length - 1] +
        previousFibonacci[previousFibonacci.length - 2],
    ];
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
