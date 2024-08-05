import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
	// var currentValue = 300;
	// currentValue := 100;
	stable var currentValue : Float = 300;
  currentValue := 300;
  Debug.print(debug_show(currentValue));

  let id = 48913763128513;

  stable var startTime = Time.now();
  Debug.print(debug_show(startTime));
  startTime := Time.now();
  Debug.print(debug_show(startTime));
  

  // Debug.print(debug_show(id));

  public func TopUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func Withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;

    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount value is too large to withdraw.");
    }
  };

  public query func CheckBalance() : async Float {
    return currentValue;
  };

  public func Compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };
  

  // TopUp();
};