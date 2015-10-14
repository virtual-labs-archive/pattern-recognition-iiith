package MyPackage;

public class MathParser
{
  private static final char[] validOperators = { '/', '*', '+', '-' };
  
  private static double evaluate(String leftSide, char oper, String rightSide)
    throws IllegalArgumentException
  {
    double total = 0.0D;
    double leftResult = 0.0D;
    double rightResult = 0.0D;
    
    int operatorLoc = findOperatorLocation(leftSide);
    if ((operatorLoc > 0) && (operatorLoc < leftSide.length() - 1)) {
      leftResult = evaluate(leftSide.substring(0, operatorLoc), leftSide.charAt(operatorLoc), leftSide.substring(operatorLoc + 1, leftSide.length()));
    } else {
      try
      {
        leftResult = Double.parseDouble(leftSide);
      }
      catch (Exception e)
      {
        throw new IllegalArgumentException("Invalid value found in portion of equation: " + leftSide);
      }
    }
    operatorLoc = findOperatorLocation(rightSide);
    if ((operatorLoc > 0) && (operatorLoc < rightSide.length() - 1)) {
      rightResult = evaluate(rightSide.substring(0, operatorLoc), rightSide.charAt(operatorLoc), rightSide.substring(operatorLoc + 1, rightSide.length()));
    } else {
      try
      {
        rightResult = Double.parseDouble(rightSide);
      }
      catch (Exception e)
      {
        throw new IllegalArgumentException("Invalid value found in portion of equation: " + rightSide);
      }
    }
    switch (oper)
    {
    case '/': 
      total = leftResult / rightResult; break;
    case '*': 
      total = leftResult * rightResult; break;
    case '+': 
      total = leftResult + rightResult; break;
    case '-': 
      total = leftResult - rightResult; break;
    case ',': 
    case '.': 
    default: 
      throw new IllegalArgumentException("Unknown operator.");
    }
    return total;
  }
  
  private static int findOperatorLocation(String string)
  {
    int index = -1;
    for (int i = validOperators.length - 1; i >= 0; i--)
    {
      index = string.indexOf(validOperators[i]);
      if (index >= 0) {
        return index;
      }
    }
    return index;
  }
  
  public static double processEquation(String equation)
    throws IllegalArgumentException
  {
    return evaluate(equation, '+', "0");
  }
  
  public static double parseEquation(String equation)
  {
    double result;
    try
    {
      result = processEquation(equation);
    }
    catch (IllegalArgumentException iae)
    {
      result = 0.0D;
    }
    return result;
  }
}
