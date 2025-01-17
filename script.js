// Your code here.
const cubes = document.querySelectorAll('.cube');

    cubes.forEach(cube => {
      cube.addEventListener('mousedown', (e) => {
        cube.style.position = 'absolute';
        cube.style.zIndex = 100; // Bring the selected cube to the front

        let offsetX = e.clientX - cube.offsetLeft;
        let offsetY = e.clientY - cube.offsetTop;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e) {
          let x = e.clientX - offsetX;
          let y = e.clientY - offsetY;

          // Prevent dragging outside the container
          x = Math.max(0, Math.min(x, container.offsetWidth - cube.offsetWidth));
          y = Math.max(0, Math.min(y, container.offsetHeight - cube.offsetHeight));

          cube.style.left = x + 'px';
          cube.style.top = y + 'px';
        }

        function onMouseUp() {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        }
      });
    });

    const container = document.querySelector('.container');