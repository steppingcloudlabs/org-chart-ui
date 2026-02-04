<template>
  <div>
    <!-- STACKED DRAGGABLE DRAWERS -->
    <div
      v-for="(drawer, index) in drawers"
      :key="drawer.id"
      right
      absolute
      clipped
      class="draggable-drawer"
      :style="drawerStyle(drawer)"
      @mousedown="startDrag($event, index)"
    >
      <v-card flat class="drawer-card">
        <!-- HEADER -->
        <v-card-title class="text-h6 d-flex justify-space-between cursor-move">
          Job Details
         
          
          <div>
            <!-- MINIMIZE / RESTORE BUTTON -->
<v-btn icon @click.stop="toggleMinimize(drawer)">
  <v-icon>
    {{ drawer.minimized ? 'mdi-window-restore' : 'mdi-minus' }}
  </v-icon>
</v-btn>

            <!-- Download BUTTON -->
            <v-tooltip bottom>
  <template v-slot:activator="{ on, attrs }">
    <v-btn
      icon
      color="primary"
      v-bind="attrs"
      v-on="on"
      @click.stop="saveDrawerAsPDF(drawer)"
    >
      <v-icon>mdi-download</v-icon>
    </v-btn>
  </template>
  <span>Download PDF</span>
</v-tooltip>


            <!-- CLOSE BUTTON -->
            <v-btn icon @click.stop="closeDrawer(index)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          
          <!-- <v-btn icon @click.stop="closeDrawer(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn> -->
        </v-card-title>

        <v-divider />

        <div class="drawer-body" ref="drawerBody" @scroll="syncScroll"   v-show="!drawer.minimized"
>
          <!-- BODY -->
          <v-card-text>
            <p class="text-h6 font-weight-bold mb-1">
              {{ drawer.jobProfileData?.name_defaultValue }}
            </p>

            <v-row dense align="center">
              <v-col cols="6">
                <strong>Position ID:</strong> {{ drawer.jobProfileData?.externalCode }}
              </v-col>
             
            </v-row>

            <v-divider class="my-3" />
            <v-row dense align="center">
              <v-col cols="6">
                <strong>Job Req ID:</strong> {{ drawer.jobProfileData?.jobReqId }}
              </v-col>
              <v-col cols="6" class="text-right">
                <v-chip small color="green" dark>
                  {{ drawer.jobProfileData?.status }}
                </v-chip>
              </v-col>
            </v-row>

            <v-divider class="my-3" />

            <p><strong>Job Description:</strong></p>
            <div
              v-html="drawer.jobProfileData?.shortDesciptions?.results?.[0]?.desc_defaultValue"
            />
            <v-divider class="my-3" />
            <div
              v-html="drawer.jobProfileData?.longDesciptions?.results?.[0]?.desc_localized"
            />
            <v-divider class="my-3" />

            <p><strong>Required Skills:</strong></p>
            <v-chip-group column>
              <v-chip
                v-for="(skill, i) in drawer.jobProfileData?.competencyContents?.results || []"
                :key="i"
                small
                outlined
              >
                {{ skill?.entityNav?.name_en_US }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
export default {
  name: "JobProfileDrawerStack",

  data() {
    return {
      drawers: [],
      dragInfo: null // for drag tracking
    };
  },

  methods: {
    toggleMinimize(drawer) {
  drawer.minimized = !drawer.minimized;
},

  htmlToPlainText(html) {
  if (!html) return "-";

  const temp = document.createElement("div");
  temp.innerHTML = html;

  // Replace <li> with bullet points
  temp.querySelectorAll("li").forEach(li => {
    li.innerHTML = "• " + li.innerText;
  });

  // Add line breaks for paragraphs
  temp.querySelectorAll("p").forEach(p => {
    p.innerHTML = p.innerText + "\n\n";
  });

  return temp.innerText.replace(/\n{3,}/g, "\n\n");
},

      // SAVE DRAWER DATA
//    saveDrawerAsPDF(drawer) {
//   const doc = new jsPDF();

//   const { jobProfileData } = drawer;

//   let y = 10;

//   doc.setFontSize(16);
//   doc.text("Job Details", 10, y);
//   y += 10;

//   doc.setFontSize(12);
//   doc.text(`Name: ${jobProfileData?.name_defaultValue || "-"}`, 10, y);
//   y += 8;
//   doc.text(`Position ID: ${jobProfileData?.externalCode || "-"}`, 10, y);
//   y += 8;
//   doc.text(`Job Req ID: ${jobProfileData?.jobReqId || "-"}`, 10, y);
//   y += 8;
//   doc.text(`Status: ${jobProfileData?.status || "-"}`, 10, y);
//   y += 10;

//   doc.setFontSize(14);
//   doc.text("Job Description:", 10, y);
//   y += 8;

//   const shortDesc =
//     jobProfileData?.shortDesciptions?.results?.[0]?.desc_defaultValue || "-";
//   const shortDescLines = doc.splitTextToSize(shortDesc, 180);
//   doc.setFontSize(12);
//   doc.text(shortDescLines, 10, y);
//   y += shortDescLines.length * 6;

//   const longDesc =
//     jobProfileData?.longDesciptions?.results?.[0]?.desc_localized || "-";
//   const longDescLines = doc.splitTextToSize(longDesc, 180);
//   doc.text(longDescLines, 10, y);
//   y += longDescLines.length * 6;

//   y += 5;
//   doc.setFontSize(14);
//   doc.text("Required Skills:", 10, y);
//   y += 8;

//   const skills =
//     (jobProfileData?.competencyContents?.results || []).map(
//       (s) => s?.entityNav?.name_en_US
//     );
//   doc.setFontSize(12);
//   doc.text(skills.join(", ") || "-", 10, y);

//   doc.save(`Job_${jobProfileData?.jobReqId || Date.now()}.pdf`);
// },
saveDrawerAsPDF(drawer) {
  const doc = new jsPDF();
  const { jobProfileData } = drawer;

  let y = 12;
  const pageHeight = doc.internal.pageSize.height;

  // ---------- HELPERS ----------
  const checkPageBreak = (extra = 10) => {
    if (y + extra > pageHeight - 10) {
      doc.addPage();
      y = 12;
    }
  };

  const htmlToPlainText = (html) => {
    if (!html) return "-";

    const temp = document.createElement("div");
    temp.innerHTML = html;

    temp.querySelectorAll("li").forEach(li => {
      li.innerHTML = "• " + li.innerText;
    });

    temp.querySelectorAll("p").forEach(p => {
      p.innerHTML = p.innerText + "\n\n";
    });

    return temp.innerText.replace(/\n{3,}/g, "\n\n");
  };

  // ---------- TITLE ----------
  doc.setFontSize(16);
  doc.text("Job Details", 10, y);
  y += 10;

  // ---------- BASIC INFO ----------
  doc.setFontSize(12);
  doc.text(`Name: ${jobProfileData?.name_defaultValue || "-"}`, 10, y);
  y += 7;

  doc.text(`Position ID: ${jobProfileData?.externalCode || "-"}`, 10, y);
  y += 7;

  doc.text(`Job Req ID: ${jobProfileData?.jobReqId || "-"}`, 10, y);
  y += 7;

  doc.text(`Status: ${jobProfileData?.status || "-"}`, 10, y);
  y += 10;

  // ---------- JOB DESCRIPTION ----------
  checkPageBreak(20);
  doc.setFontSize(14);
  doc.text("Job Description", 10, y);
  y += 8;

  doc.setFontSize(12);
  const shortDescHTML =
    jobProfileData?.shortDesciptions?.results?.[0]?.desc_defaultValue;
  const shortDesc = htmlToPlainText(shortDescHTML);
  const shortLines = doc.splitTextToSize(shortDesc, 180);

  checkPageBreak(shortLines.length * 6);
  doc.text(shortLines, 10, y);
  y += shortLines.length * 6 + 4;

  const longDescHTML =
    jobProfileData?.longDesciptions?.results?.[0]?.desc_localized;
  const longDesc = htmlToPlainText(longDescHTML);
  const longLines = doc.splitTextToSize(longDesc, 180);

  checkPageBreak(longLines.length * 6);
  doc.text(longLines, 10, y);
  y += longLines.length * 6 + 6;

  // ---------- SKILLS ----------
  checkPageBreak(20);
  doc.setFontSize(14);
  doc.text("Required Skills", 10, y);
  y += 8;

  doc.setFontSize(12);
  const skills =
    jobProfileData?.competencyContents?.results || [];

  const skillsText =
    skills.length
      ? skills.map(s => `• ${s?.entityNav?.name_en_US}`).join("\n")
      : "-";

  const skillLines = doc.splitTextToSize(skillsText, 180);

  checkPageBreak(skillLines.length * 6);
  doc.text(skillLines, 10, y);
  y += skillLines.length * 6;

  // ---------- SAVE ----------
  doc.save(`Job_${jobProfileData?.jobReqId || Date.now()}.pdf`);
},



    // Helper to split long text for PDF
    splitText(text, maxWidth) {
      return jsPDF.splitTextToSize(text, maxWidth);
    },

    calcTextHeight(text, maxWidth) {
      return this.splitText(text, maxWidth).length * 6;
    },
    syncScroll(event) {
      const scrollTop = event.target.scrollTop;
      this.$refs.drawerBody.forEach(el => {
        if (el !== event.target) el.scrollTop = scrollTop;
      });
    },

    openDrawer(jobProfileData) {
      const exists = this.drawers.find(
        d => d?.jobProfileData?.externalCode  === jobProfileData?.externalCode 
      );
      if (exists) return;

      this.drawers.push({
        id: `${jobProfileData.jobReqId}-${Date.now()}`,
        jobProfileData,
        open: true,
         minimized: false,
        x: 100 + this.drawers.length * 30, // initial positions
        y: 100 + this.drawers.length * 30
      });
    },

    closeDrawer(index) {
      this.drawers.splice(index, 1);
    },

    drawerStyle(drawer) {
      return {
        position: "absolute",
        top: drawer.y + "px",
        left: drawer.x + "px",
        width: "420px",
        zIndex: 2000 + this.drawers.indexOf(drawer),
        cursor: "grab"
      };
    },

    // DRAG HANDLERS
    startDrag(e, index) {
      if (e.target.closest(".v-btn")) return; // don't drag on close button

      const drawer = this.drawers[index];
      this.dragInfo = {
        index,
        startX: e.clientX,
        startY: e.clientY,
        origX: drawer.x,
        origY: drawer.y
      };

      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
    },

    onDrag(e) {
      if (!this.dragInfo) return;

      const drawer = this.drawers[this.dragInfo.index];
      drawer.x = this.dragInfo.origX + (e.clientX - this.dragInfo.startX);
      drawer.y = this.dragInfo.origY + (e.clientY - this.dragInfo.startY);
    },

    stopDrag() {
      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.stopDrag);
      this.dragInfo = null;
    }
  }
};
</script>

<style scoped>
.drawer-card {
  border: 2px solid #1976d2;
  border-radius: 6px;
}


.draggable-drawer {
  transition: none !important;
  user-select: none;
}

.drawer-body {
  height: calc(100vh - 120px);
  overflow-y: auto;
}

.cursor-move {
  cursor: grab;
}
</style>