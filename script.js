function divide(arr, n) {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (currentSum + val <= n) {
      currentSubarray.push(val);
      currentSum += val;
    } else {
      if (currentSubarray.length > 0) {
        result.push(currentSubarray);
      }
      currentSubarray = [val];
      currentSum = val;
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
}

document.getElementById('divideBtn').addEventListener('click', () => {
  const arrInput = document.getElementById('arrayInput').value.trim();
  const maxSumInput = document.getElementById('maxSumInput').value.trim();
  const errorDiv = document.getElementById('error');
  const resultDiv = document.getElementById('result');

  errorDiv.textContent = '';
  resultDiv.textContent = '';

  if (!arrInput) {
    errorDiv.textContent = 'Please enter the array.';
    return;
  }
  if (!maxSumInput) {
    errorDiv.textContent = 'Please enter the maximum sum.';
    return;
  }

  let arr;
  try {
    arr = arrInput.split(',').map(s => s.trim()).map(Number);
    if (arr.some(x => isNaN(x))) {
      throw new Error();
    }
  } catch {
    errorDiv.textContent = 'Invalid array input. Use comma separated integers.';
    return;
  }

  const n = Number(maxSumInput);
  if (isNaN(n) || n <= 0) {
    errorDiv.textContent = 'Maximum sum must be a positive number.';
    return;
  }

  const maxVal = Math.max(...arr);
  if (maxVal > n) {
    errorDiv.textContent = 'Maximum value in the array should be less than or equal to n.';
    return;
  }

  const subarrays = divide(arr, n);
  resultDiv.textContent = `Result:\n${JSON.stringify(subarrays)}`;
});
