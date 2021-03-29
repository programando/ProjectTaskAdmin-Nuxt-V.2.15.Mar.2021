<template>
  <div class="mx-2 padre">
    <div class="container">
      <button class="floating-btn btn">
        A
      </button>
      

      <div class="floating-container">
        <button class="btn">
          1
        </button>
        <button class="btn">
          2
        </button>
        <button class="btn">
          3
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BotonDesplegable"
};
</script>

<style scoped>
.padre {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  transform: translateY(100px);
}

.btn {
  width: 100px;
  height: 50px;
  font-size: 22px;
  outline: none;
  border: none;
  background: #f44336;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.floating-btn {
  font-size: 28px;
}

.floating-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;

  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  padding-bottom: 70%;
  overflow: hidden;
  transition: height 0.4s;
}

.floating-container:hover {
  height: 360px;
}

.floating-container .btn {
  width: 0;
  height: 0;
  opacity: 0;
  transition: width 0.4s, height 0.4s, opacity 0.2s;
}

.floating-container:hover button {
  width: 100px;
  height: 50px;
  opacity: 1;
  animation: marginAnimated 0.4s forwards;
  animation-delay: 0.2s;
}

@keyframes marginAnimated {
  from {
    margin-bottom: 0;
  }

  to {
    margin-bottom: 10px;
  }
}

/* Buttons colors */
.floating-container button:nth-child(1) {
  background: #f44336;
}

.floating-container button:nth-child(2) {
  background: #fdd835;
}

.floating-container button:nth-child(3) {
  background: #4caf50;
}

.floating-container button:nth-child(4) {
  background: #039be5;
}

.floating-container button:hover {
  opacity: 0.8;
}
</style>
