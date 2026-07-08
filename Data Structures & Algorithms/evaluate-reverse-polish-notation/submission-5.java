class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        
        Set<String> ops = new HashSet<>();
        ops.add("+"); ops.add("-"); ops.add("*"); ops.add("/");
        
        for (int i = 0; i < tokens.length; i++) {
            if (ops.contains(tokens[i])) {
                int num1 = stack.pop();
                int num2 = stack.pop();
                System.out.println("here: " + tokens[i]);
                if (tokens[i].equals("+")) {
                    stack.push(num1 + num2);
                } else if (tokens[i].equals("-")) {
                    stack.push(num2 - num1);
                } else if (tokens[i].equals("*")) {
                    stack.push(num1 * num2);
                } else if (tokens[i].equals("/")) {
                    stack.push(num2 / num1);
                }
            } else {
                stack.push(Integer.parseInt(tokens[i]));
            }
        }
        return stack.pop();
    }
}
