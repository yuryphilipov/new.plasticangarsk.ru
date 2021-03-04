function _createModal(options) {
  function addFooter() {
    const footer = document.createElement("div");
    footer.classList.add("modal-footer");
  }

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-overlay" data-close="true">
      <div class="modal-window">
        <div class="modal-header">
          <div class="modal-title">${options.title || "Окно"}</div>
          ${
            options.closable
              ? '<span class="modal-close" data-close="true">&times;</span>'
              : ""
          }
        </div>
        <div class="modal-content">
          <p>${options.content || ""}</p>
        </div>
        <div class="modal-footer">
          <button class='btn btn-primary'>OK</button>
          <button class='btn btn-danger'>Cancel</button>
        </div>
      </div>
    </div>
  `
  );
  document.body.appendChild(modal);
  return modal;
}

function _destroyModal() {}

const modal = function(options) {
  const $modal = _createModal(options);

  const _modal = {
    open() {
      $modal.classList.add("open");
    },
    close() {
      $modal.classList.remove("open");
      $modal.classList.add("closing");
      setTimeout(() => {
        $modal.classList.remove("closing");
      }, 200);
    }
  };

  const closeListener = event => {
    if (event.target.dataset.close) {
      _modal.close();
    }
  };

  $modal.addEventListener("click", closeListener);

  return Object.assign(_modal, {
    destroy() {
      $modal.removeEventListener("click", closeListener);
      $modal.remove();
    }
  });
};

window.modal = modal;
