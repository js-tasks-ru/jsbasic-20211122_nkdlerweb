function factorial(n) {
            result = n;
			if (n === 0) {
				result = 1;
			}
            for (let i = n - 1; i > 1; --i) {
                result *= i;
            }
            return result;
        }