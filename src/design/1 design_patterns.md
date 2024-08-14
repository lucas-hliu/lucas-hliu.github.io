---
title: 设计原则
order: 2
category:
  - 架构设计
tag:
  - c++
  - 设计模式
  - 设计原则
editLink: false
---

### 设计模式

**设计模式**是解决常见软件设计问题的通用解决方案。它们分为三大类：
1. **创建型模式**：关注对象创建，如单例模式、[工厂模式](/design/6%20factory_pattern)。
2. **结构型模式**：关注对象组合，如[装饰器模式](/design/4%20decorator_pattern)、[桥接模式](/design/5%20bridge_pattern)，组合模式。
3. **行为型模式**：关注对象间通信，如[观察者模式](/design/2%20observer_pattern)、[策略模式](/design/3%20strategy_pattern)。

### 设计原则

**设计原则**是指导代码设计的基本准则，如：

1. **单一职责原则 (SRP)**

**定义**: 一个类应只有一个引起其变化的原因，即一个类只负责一项职责。

**目的**: 提高代码的可维护性和可读性，减少类的复杂性。

2. **开闭原则 (OCP)**

**定义**: 软件实体应对扩展开放，对修改关闭。

**目的**: 通过抽象和接口，允许添加新功能而无需修改现有代码，减少引入新 bug 的风险。

3. **里氏替换原则 (LSP)**

**定义**: 子类对象必须能够替换其父类对象且行为一致。

**目的**: 保证继承层次的正确性，避免运行时错误。

4. **依赖倒置原则 (DIP)**

**定义**: 高层模块不应依赖于低层模块，二者都应该依赖于抽象；抽象不应依赖于细节，细节应该依赖于抽象。

**目的**: 减少模块之间的耦合性，提高系统的灵活性和可扩展性。

5. **接口隔离原则 (ISP)**

**定义**: 不应强迫一个类依赖于它不需要的接口，接口应尽量细化。

**目的**: 通过多个特定接口来代替单一的总接口，减少代码的复杂性，提高系统的灵活性。

### 关于架构设计的一点思考
- 减少耦合
  
  通过添加抽象接口层，将调用模块与实现模块进行隔离，降低耦合性。调用模块只依赖抽象接口，进行业务逻辑的实现，实现模块基于抽象接口实现具体的底层细节。
  
- 单一职责
  
  一个模块只实现其功能的最小集，对外提供尽可能少的接口，接口应尽量细化。

- 隔离变化/稳定
  
  找出系统中可预计的变化，将其隔离到相同的模块。系统需求变动导致的修改尽可能的不会扩散的稳定的模块。