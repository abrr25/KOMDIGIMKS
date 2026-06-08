
document.addEventListener("DOMContentLoaded", () => {
  
  const splash = document.getElementById("splash-screen");
  if (splash) {
    setTimeout(() => {
      splash.classList.add("fade-out");
      setTimeout(() => {
        splash.remove();
      }, 600);
    }, 2000);
  }

  let currentFloor = 1;
  let selectedRoomId = null;
  let zoomScale = 1;
  const zoomStep = 0.15;
  const maxZoom = 2.5;
  const minZoom = 0.7;

  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const searchSuggestions = document.getElementById("search-suggestions");
  const digitalClock = document.getElementById("clock-time");
  const currentFloorTitle = document.getElementById("current-floor-title");
  const currentFloorDesc = document.getElementById("current-floor-desc");
  const welcomeCard = document.getElementById("details-welcome");
  const detailsCard = document.getElementById("room-details-card");
  const zoomContainer = document.getElementById("zoom-container");
  
  const detailCategory = document.getElementById("detail-category");
  const detailName = document.getElementById("detail-name");
  const detailDivision = document.getElementById("detail-division");
  const detailDesc = document.getElementById("detail-desc");
  const detailFacilities = document.getElementById("detail-facilities");
  const detailStafList = document.getElementById("detail-staf-list");
  const shareBtn = document.getElementById("btn-share-loc");
  const visualFloorTag = document.getElementById("visual-floor-tag");
  const roomVisualBox = document.getElementById("room-visual-box");

  const contactsContainer = document.getElementById("contacts-container");
  const faqContainer = document.getElementById("faq-container");

  lucide.createIcons();

  initClock();
  initOnboardingHub();
  registerMapEvents();
  registerFloorSwitcher();
  registerZoomControls();
  registerSearchEvents();
  registerFilterTags();
  registerTabs();
  registerPageSwitcher();
  checkDeepLink();

  function initClock() {
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      digitalClock.textContent = timeString;
    }
    updateTime();
    setInterval(updateTime, 1000);
  }

  function registerMapEvents() {
    const roomGroups = document.querySelectorAll(".room-group");
    
    roomGroups.forEach(group => {
      
      group.addEventListener("click", () => {
        const roomId = group.getAttribute("data-room-id");
        selectRoom(roomId);
      });
    });
  }

  function registerFloorSwitcher() {
    const floorButtons = document.querySelectorAll(".floor-btn");
    
    floorButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const floorNum = parseInt(btn.getAttribute("data-floor"));
        switchFloor(floorNum);
      });
    });
  }

  function switchFloor(floorNum) {
    if (currentFloor === floorNum) return;
    
    clearActiveRoom();
    
    currentFloor = floorNum;
    
    document.querySelectorAll(".floor-btn").forEach(btn => {
      const btnFloor = parseInt(btn.getAttribute("data-floor"));
      if (btnFloor === floorNum) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const floorData = DIGIMAP_DATA.floors.find(f => f.id === floorNum);
    if (floorData) {
      currentFloorTitle.textContent = floorData.name;
      currentFloorDesc.textContent = floorData.description;
    }

    document.querySelectorAll(".floor-map").forEach(map => {
      const mapId = map.getAttribute("id");
      if (mapId === `map-floor-${floorNum}`) {
        map.classList.remove("hidden");
        map.classList.add("active");
      } else {
        map.classList.remove("active");
        map.classList.add("hidden");
      }
    });

    resetZoom();
  }

  function registerZoomControls() {
    document.getElementById("zoom-in-btn").addEventListener("click", () => adjustZoom(zoomStep));
    document.getElementById("zoom-out-btn").addEventListener("click", () => adjustZoom(-zoomStep));
    document.getElementById("zoom-reset-btn").addEventListener("click", resetZoom);
  }

  function adjustZoom(step) {
    zoomScale = Math.min(maxZoom, Math.max(minZoom, zoomScale + step));
    applyZoom();
  }

  function resetZoom() {
    zoomScale = 1;
    applyZoom();
  }

  function applyZoom() {
    zoomContainer.style.transform = `scale(${zoomScale})`;
  }

  function selectRoom(roomId, triggerFloorSwitch = false) {
    
    const room = DIGIMAP_DATA.rooms.find(r => r.id === roomId);
    if (!room) return;

    if (triggerFloorSwitch && room.floor !== currentFloor) {
      switchFloor(room.floor);
    }

    clearActiveRoom();
    const svgRoom = document.querySelector(`.room-group[data-room-id="${roomId}"]`);
    if (svgRoom) {
      svgRoom.classList.add("active-room");
      
      svgRoom.classList.add("pulse-highlight");
      setTimeout(() => {
        svgRoom.classList.remove("pulse-highlight");
      }, 3000);
    }

    selectedRoomId = roomId;

    detailCategory.textContent = room.category;
    detailCategory.className = `badge category-${room.category.toLowerCase()}`;
    detailName.textContent = room.name;
    detailDivision.textContent = room.division;
    detailDesc.textContent = room.description;
    visualFloorTag.textContent = `Lantai ${room.floor}`;

    applyCategoryGradient(room.category);

    detailFacilities.innerHTML = "";
    if (room.facilities.length > 0) {
      room.facilities.forEach(fac => {
        const tag = document.createElement("span");
        tag.className = "facility-tag";
        
        let iconName = "check";
        if (fac.includes("Wi-Fi")) iconName = "wifi";
        else if (fac.includes("AC")) iconName = "wind";
        else if (fac.includes("Proyektor") || fac.includes("TV")) iconName = "monitor";
        else if (fac.includes("Kapasitas")) iconName = "users";

        tag.innerHTML = `<i data-lucide="${iconName}"></i> ${fac}`;
        detailFacilities.appendChild(tag);
      });
    } else {
      detailFacilities.innerHTML = `<span class="facility-tag"><i data-lucide="info"></i> Standar</span>`;
    }

    detailStafList.innerHTML = "";
    if (room.staf.length > 0) {
      room.staf.forEach(person => {
        const item = document.createElement("div");
        item.className = "staff-item";
        
        const initials = person.name.split(" ").map(n => n[0]).slice(0, 2).join("");

        item.innerHTML = `
          <div class="staff-avatar">${initials}</div>
          <div class="staff-info">
            <div class="staff-name">${person.name}</div>
            <div class="staff-role">${person.role}</div>
          </div>
        `;
        detailStafList.appendChild(item);
      });
    } else {
      detailStafList.innerHTML = `<div class="no-suggestions">Tidak ada staf khusus di ruangan ini (Ruang Publik/Fasilitas Umum)</div>`;
    }

    welcomeCard.classList.add("hidden");
    detailsCard.classList.remove("hidden");

    switchTab("details");
    
    lucide.createIcons();
  }

  function clearActiveRoom() {
    document.querySelectorAll(".room-group").forEach(group => {
      group.classList.remove("active-room");
      group.classList.remove("pulse-highlight");
    });
  }

  function applyCategoryGradient(category) {
    let gradient = "linear-gradient(135deg, hsl(210, 30%, 93%), hsl(210, 40%, 88%))";
    
    if (category === "Kantor") {
      gradient = "linear-gradient(135deg, rgba(0, 77, 230, 0.08), rgba(255, 255, 255, 0.95))";
    } else if (category === "Rapat") {
      gradient = "linear-gradient(135deg, rgba(197, 95, 43, 0.08), rgba(255, 255, 255, 0.95))";
    } else if (category === "Layanan") {
      gradient = "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(255, 255, 255, 0.95))";
    } else if (category === "Fasilitas") {
      gradient = "linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(255, 255, 255, 0.95))";
    }

    roomVisualBox.style.background = gradient;
  }

  function registerSearchEvents() {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length > 0) {
        clearSearchBtn.classList.remove("hidden");
        performSearch(query);
      } else {
        clearSearchBtn.classList.add("hidden");
        searchSuggestions.classList.add("hidden");
      }
    });

    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearSearchBtn.classList.add("hidden");
      searchSuggestions.classList.add("hidden");
      searchInput.focus();
    });

    document.addEventListener("click", (e) => {
      if (e.target !== searchInput) {
        searchSuggestions.classList.add("hidden");
      }
    });

    searchInput.addEventListener("focus", () => {
      if (searchInput.value.trim().length > 0) {
        searchSuggestions.classList.remove("hidden");
      }
    });
  }

  function performSearch(query) {
    searchSuggestions.innerHTML = "";
    const results = [];

    DIGIMAP_DATA.rooms.forEach(room => {
      let score = 0;
      if (room.name.toLowerCase().includes(query)) score += 10;
      if (room.division.toLowerCase().includes(query)) score += 5;
      if (room.category.toLowerCase().includes(query)) score += 3;
      
      const matchingStaff = room.staf.filter(s => s.name.toLowerCase().includes(query));
      if (matchingStaff.length > 0) {
        score += matchingStaff.length * 8;
      }

      if (score > 0) {
        results.push({ room, score, matchingStaff });
      }
    });

    results.sort((a, b) => b.score - a.score);

    const topResults = results.slice(0, 5);

    if (topResults.length > 0) {
      topResults.forEach(item => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        
        let subText = item.room.division;
        if (item.matchingStaff.length > 0) {
          subText = `<i data-lucide="user"></i> Staf: ${item.matchingStaff[0].name}`;
        }

        div.innerHTML = `
          <div class="suggest-info">
            <div class="name">${item.room.name}</div>
            <div class="sub">${subText}</div>
          </div>
          <span class="suggest-floor">Lantai ${item.room.floor}</span>
        `;
        
        const handleSelect = (e) => {
          e.preventDefault();
          e.stopPropagation();
          selectRoom(item.room.id, true);
          searchSuggestions.classList.add("hidden");
          searchInput.value = item.room.name;
          clearSearchBtn.classList.remove("hidden");
        };
        div.addEventListener("click", handleSelect);

        searchSuggestions.appendChild(div);
      });
      
      searchSuggestions.classList.remove("hidden");
      lucide.createIcons();
    } else {
      searchSuggestions.innerHTML = `<div class="no-suggestions">Tidak menemukan hasil untuk "${query}"</div>`;
      searchSuggestions.classList.remove("hidden");
    }
  }

  function registerFilterTags() {
    const filterTags = document.querySelectorAll(".filter-tag");
    
    filterTags.forEach(tag => {
      tag.addEventListener("click", () => {
        
        filterTags.forEach(t => t.classList.remove("active"));
        tag.classList.add("active");

        const category = tag.getAttribute("data-category");
        applyCategoryFilter(category);
      });
    });
  }

  function applyCategoryFilter(category) {
    const roomGroups = document.querySelectorAll(".room-group");
    
    roomGroups.forEach(group => {
      const roomId = group.getAttribute("data-room-id");
      const room = DIGIMAP_DATA.rooms.find(r => r.id === roomId);

      if (!room) return;

      if (category === "all" || room.category === category) {
        group.style.opacity = "1";
        group.querySelector(".room-path").style.stroke = "";
      } else {
        
        group.style.opacity = "0.2";
      }
    });
  }

  function registerTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        switchTab(targetTab);
      });
    });
  }

  function switchTab(tabId) {
    document.querySelectorAll(".tab-btn").forEach(btn => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    document.querySelectorAll(".tab-content").forEach(content => {
      if (content.getAttribute("id") === `tab-${tabId}`) {
        content.classList.remove("hidden");
        content.classList.add("active");
      } else {
        content.classList.add("hidden");
        content.classList.remove("active");
      }
    });
  }

  function initOnboardingHub() {
    
    contactsContainer.innerHTML = "";
    DIGIMAP_DATA.onboarding.contacts.forEach(contact => {
      const card = document.createElement("div");
      card.className = "contact-card";
      
      card.innerHTML = `
        <div>
          <div class="contact-name">${contact.name}</div>
          <div class="contact-role">${contact.role}</div>
        </div>
        <a href="tel:${contact.phone.replace(/[^0-9]/g, '')}" class="contact-action">
          <i data-lucide="phone-call"></i> Hubungi
        </a>
      `;
      contactsContainer.appendChild(card);
    });

    faqContainer.innerHTML = "";
    DIGIMAP_DATA.onboarding.faq.forEach((faq, index) => {
      const item = document.createElement("div");
      item.className = "faq-item";
      item.innerHTML = `
        <button class="faq-question">
          <span>${faq.q}</span>
          <i data-lucide="chevron-down"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">${faq.a}</div>
        </div>
      `;

      const btn = item.querySelector(".faq-question");
      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        
        document.querySelectorAll(".faq-item").forEach(otherItem => {
          otherItem.classList.remove("active");
        });
        
        if (!isActive) {
          item.classList.add("active");
        }
      });

      faqContainer.appendChild(item);
    });

    lucide.createIcons();
  }

  function registerPageSwitcher() {
    const navItems = document.querySelectorAll(".nav-item");
    
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        const targetPage = item.getAttribute("data-page");
        
        navItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
        
        document.querySelectorAll(".page-container").forEach(page => {
          const pageId = page.getAttribute("id");
          if (pageId === `page-${targetPage}`) {
            page.classList.remove("hidden");
            page.classList.add("active");
          } else {
            page.classList.add("hidden");
            page.classList.remove("active");
          }
        });

        if (targetPage === "map") {
          window.dispatchEvent(new Event('resize'));
        }
      });
    });
  }

  shareBtn.addEventListener("click", () => {
    if (!selectedRoomId) return;

    const deepLink = `${window.location.origin}${window.location.pathname}?room=${selectedRoomId}`;
    
    navigator.clipboard.writeText(deepLink)
      .then(() => {
        showToast("Link lokasi disalin ke papan klip!");
      })
      .catch(err => {
        console.error("Gagal menyalin link: ", err);
        showToast("Gagal menyalin link otomatis!");
      });
  });

  function showToast(message) {
    const toast = document.getElementById("toast-notification");
    const toastMsg = document.getElementById("toast-message");
    toastMsg.textContent = message;
    
    toast.classList.remove("hidden");
    
    setTimeout(() => {
      toast.classList.add("show");
    }, 50);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 400);
    }, 3000);
  }

  function checkDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get("room");
    if (roomParam) {
      
      setTimeout(() => {
        selectRoom(roomParam, true);
      }, 300);
    }
});
