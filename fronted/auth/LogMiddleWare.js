function Log(stack, level, pkg, message) {
  const logData = {
    stack,
    level,
    package,
    message,
  };


try {
    await fetch("http://20.244.56.144/evaluation-service//logs", {  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logData),
    });
  } catch (error) {
    console.error("Wornfg:", error);
  }
}

module.export = { Log };
