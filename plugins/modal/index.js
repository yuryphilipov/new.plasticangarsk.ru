Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling);
};

const noop = () => {};

function _createFooter(buttons = []) {
  const footer = document.createElement("div");
  footer.classList.add("modal-footer");

  if (buttons.length > 0) {
    buttons.forEach(btn => {
      let $btn = document.createElement("button");
      $btn.textContent = btn.text;
      $btn.classList.add("btn");
      $btn.classList.add(`btn-${btn.type || "default"}`);
      $btn.onclick = btn.handler || noop;
      if (btn.isClose) $btn.dataset.close = "true";
      footer.appendChild($btn);
    });
  }

  return footer;
}

function _createModal(options) {
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
        <div class="modal-content" data-content>
          <p>${options.content || ""}</p>
        </div>
      </div>
    </div>
  `
  );

  const $footer = _createFooter(options.buttons);
  $footer.appendAfter(modal.querySelector("[data-content]"));

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
