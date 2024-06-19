document.addEventListener("alpine:init", () => {
  Alpine.data("AngkaBom", () => ({
    init() {
      this.resetSemua();
    },

    bom: null,
    mulaikah: false,
    min: null,
    max: null,
    tebakan: null,

    mulai() {
      this.mulaikah = true;
    },
    cekTebakan() {
      if (this.tebakan == this.bom) {
        Swal.fire({
          title: "Sayang Sekali!",
          text: this.tebakan + " Adalah Angka Bom",
          icon: "error",
        });
        this.resetSemua();
      } else {
        this.setKisaran();
      }
    },
    resetBom() {
      this.bom = Math.floor(Math.random() * 100) + 1;
    },
    resetSemua() {
      this.resetBom();
      this.min = 0;
      this.max = 100;
      this.tebakan = null;
      this.mulaikah = false;
    },
    setKisaran() {
      if (this.tebakan > this.bom) {
        this.max = this.tebakan - 1;
      } else {
        this.min = parseInt(this.tebakan) + 1;
      }
      if (this.min == this.max) {
        Swal.fire({
          title: "Seri!",
          text: "Angka bom:" + this.min + " tidak tertebak sampai akhir",
          icon: "info",
        });
        this.resetSemua();
      } else {
        Swal.fire({
          title: "Selamat!",
          text: this.tebakan + " Bukan Angka Bom",
          icon: "success",
        });
      }
      this.tebakan = null;
    },
  }));
});
