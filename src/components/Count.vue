<template>
  <div ref="tree" style="width: 100%; height: 100vh; background: #f5f5f5"></div>
</template>

<script>
import OrgChart from '@balkangraph/orgchart.js'

export default {
  name: 'PositionOrgChart',

  mounted() {
    const employees = [
      { dept: 'Engineering', position: 'Developer', status: 'present' },
      { dept: 'Engineering', position: 'Developer', status: 'present' },
      { dept: 'Engineering', position: 'Developer', status: 'vacant' },
      { dept: 'Engineering', position: 'QA', status: 'present' },
      { dept: 'Engineering', position: 'QA', status: 'vacant' },
      { dept: 'HR', position: 'Recruiter', status: 'present' },
      { dept: 'HR', position: 'Recruiter', status: 'vacant' },
      { dept: 'HR', position: 'HR Manager', status: 'present' },
    ]

    const nodes = []
    let id = 1

    // Root
    nodes.push({ id, name: 'Company', type: 'root' })
    const rootId = id++

    const deptIds = {}
    const positionStats = {}

    // Create departments
    employees.forEach((e) => {
      if (!deptIds[e.dept]) {
        deptIds[e.dept] = id
        nodes.push({
          id,
          pid: rootId,
          name: e.dept,
          type: 'dept',
        })
        id++
      }
    })

    // Count positions
    employees.forEach((e) => {
      const key = `${e.dept}_${e.position}`
      if (!positionStats[key]) {
        positionStats[key] = {
          dept: e.dept,
          position: e.position,
          present: 0,
          vacant: 0,
        }
      }
      e.status === 'present' ? positionStats[key].present++ : positionStats[key].vacant++
    })

    // Create position nodes
    Object.values(positionStats).forEach((p) => {
      nodes.push({
        id,
        pid: deptIds[p.dept],
        name: p.position,
        countText: `🟢 ${p.present} | 🔴 ${p.vacant}`,
        type: 'position',
      })
      id++
    })

    OrgChart.templates.positionTemplate = Object.assign({}, OrgChart.templates.ana)

    OrgChart.templates.positionTemplate.size = [260, 120]

    // Position Name
    OrgChart.templates.positionTemplate.field_0 = `
      <text x="130" y="35" text-anchor="middle"
        style="font-size:15px;font-weight:bold;">
        {val}
      </text>
    `

    // Present | Vacant
    OrgChart.templates.positionTemplate.field_1 = `
      <text x="130" y="70" text-anchor="middle"
        style="font-size:13px;">
        {val}
      </text>
    `

    new OrgChart(this.$refs.tree, {
      template: 'positionTemplate',
      nodes,
      enableSearch: false,
      nodeBinding: {
        field_0: 'name',
        field_1: 'countText',
      },
    })
  },
}
</script>
