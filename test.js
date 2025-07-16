document.addEventListener("DOMContentLoaded", () => {
  // ✅ 1. السلايدر
  const images = [
    {
      src: "pic/8888.webp",
      link: "doctor.html",
      text: "طبيب متخصص"
    },
    {
      src: "pic/eng (1).jpg",
      link: "رابط2.html",
      text: "حرفي"
    },
    {
      src: "pic/456.webp",
      link: "رابط3.html",
      text: "معلم"
    }
  ];

  let index = 0;
  const sliderImage = document.getElementById("slider-image");
  const sliderLink = document.getElementById("slider-link");
  const sliderText = document.getElementById("slider-text");

  setInterval(() => {
    index = (index + 1) % images.length;
    sliderImage.style.opacity = 0;
    sliderText.style.opacity = 0;

    setTimeout(() => {
      sliderImage.src = images[index].src;
      sliderLink.href = images[index].link;
      sliderText.textContent = images[index].text;
      sliderImage.style.opacity = 1;
      sliderText.style.opacity = 1;
    }, 500);
  }, 3000);

  // ✅ 2. نافذة "انضم إلينا"
  const joinModal = document.getElementById("join-modal");
  const openJoinBtn = document.getElementById("open-join");
  const closeJoinBtn = joinModal?.querySelector(".close");

  const fieldSelect = document.getElementById("field-select");
  const specialtySelect = document.getElementById("specialty-select");

  const specialties = {
    "تعليم": ["رياضيات", "أحياء", "كيمياء", "جغرافيا", "تاريخ"],
    "طب": ["قلب", "عظام", "أنف وأذن وحنجرة", "أسنان"],
    "حرف": ["نجارة", "سباكة", "كهرباء", "خياطة"]
  };

  fieldSelect?.addEventListener("change", () => {
    const selectedField = fieldSelect.value;
    specialtySelect.innerHTML = '<option value="">اختر التخصص</option>';
    if (specialties[selectedField]) {
      specialties[selectedField].forEach(spec => {
        const option = document.createElement("option");
        option.value = spec;
        option.textContent = spec;
        specialtySelect.appendChild(option);
      });
    }
  });

  openJoinBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    joinModal.style.display = "block";
  });

  closeJoinBtn?.addEventListener("click", () => {
    joinModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === joinModal) {
      joinModal.style.display = "none";
    }
  });

  // ✅ 3. نافذة "تسجيل حساب جديد"
  const registerModal = document.getElementById("register-modal");
  const openRegisterBtn = document.getElementById("open-register");
  const closeRegisterBtn = registerModal?.querySelector(".close");

  openRegisterBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    registerModal.style.display = "block";
  });

  closeRegisterBtn?.addEventListener("click", () => {
    registerModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === registerModal) {
      registerModal.style.display = "none";
    }
  });
});
