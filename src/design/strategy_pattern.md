---
title: 策略模式
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 策略模式
editLink: false
---

策略模式（Strategy Pattern）是一种行为型设计模式，它定义了一系列算法，并将每个算法封装在独立的策略类中，使得它们可以互相替换。策略模式使得算法的变化不会影响到使用算法的客户类。

### 组成部分
1. **策略接口**：定义算法的通用接口。
2. **具体策略类**：实现策略接口的不同算法。
3. **上下文类**：持有一个策略对象，并在运行时决定使用哪种策略。

### 例子

假设我们有一个水果计价系统，需要计算不同水果的价格。可以通过策略模式将计算逻辑封装成独立的策略类，这样可以动态选择合适的计算策略。

在使用策略模式时，可以轻松更改折扣策略，而无需修改订单类的代码，从而提高了代码的可扩展性和维护性。

::: tabs

@tab 无设计模式

```cpp
// 折扣类型
enum class DiscountType {
  NoDiscount,
  SeasonalDiscount,
  // other discount type...
};

// 上下文类
class Order {
public:
    Order(){}

    double getFinalPrice(double price, DiscountType type) const {
        if (type == DiscountType::NoDiscount) {
          return price;
        }
        else if(type == DiscountType::SeasonalDiscount) {
          return price * 0.9;
        }
        //else ......
    }
};
```

@tab 策略模式

```cpp
// 策略接口
class DiscountStrategy {
public:
    virtual double calculate(double price) const = 0;
};

// 具体策略
class NoDiscount : public DiscountStrategy {
public:
    double calculate(double price) const override {
        return price;
    }
};

class SeasonalDiscount : public DiscountStrategy {
public:
    double calculate(double price) const override {
        return price * 0.9;
    }
};
//other discounts...

// 上下文类
class Order {
    DiscountStrategy* discountStrategy;
public:
    Order(DiscountStrategy* strategy) : discountStrategy(strategy) {}

    double getFinalPrice(double price) const {
        return discountStrategy->calculate(price);
    }
};
```
:::