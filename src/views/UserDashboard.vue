<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import TableForm from '@/components/molecules/TableForm.vue'
import TableRow from '@/components/molecules/TableRow.vue'
import TableCell from '@/components/molecules/TableCell.vue'
import ProgressScore from '@/components/molecules/ProgressScore.vue'
import TabIcon from '@/components/icons/TabIcon.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconMore from '@/components/icons/IconMore.vue'
import IconPause from '@/components/icons/IconPause.vue'
import IconLeads from '@/components/icons/IconLeads.vue'
import IconInbox from '@/components/icons/IconInbox.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconSlack from '@/components/icons/IconSlack.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import TopBar from '@/components/molecules/TopBar.vue'
import inputTextControl from '@/components/atoms/InputTextControl.vue'
import CoreButton from '@/components/atoms/CoreButton.vue'
const { getUser } = useAuthStore()
const { loggedInUser } = storeToRefs(useAuthStore())
const route = useRoute()
onMounted( async () => {
    // on refesh based on params.id it will get the endpoint data
   await getUser(+route.params.id)
})
</script>
<template>
  <div class="wrapper">
  <TopBar/>
  <div class="dashboard-wrap">
    <div class="sidebar">
      <div class="sidebar-section">
        <router-link to="/" class="menu-options details-options">
          <div class="options-wrap"><IconLeads/></div>
          <p>All Leads</p>
        </router-link>
        <router-link to="/" class="menu-options details-options">
          <div class="options-wrap"><IconInbox/></div>
          <p>Master Inbox</p>
        </router-link>
        <router-link :to="{ name: 'userDashboard', params: {id: 1} }" class="menu-options details-options">
              <div class="options-wrap"><IconProfile/></div>
              <p>Email Campaigns</p>
        </router-link>
      </div>
      <div class="sidebar-section">
        <router-link to="/" class="menu-options details-options">
          <div class=""><IconSlack/></div>
          <p>Join Slack Community</p>
        </router-link>
        <router-link to="/" class="menu-options details-options">
          <div class="options-wrap"><IconPlay/></div>
          <p>Smartlead Tutorials</p>
        </router-link>
      </div>
    </div>
    <div class="right-section">
      <div class="search-section">
          <p>All Campaigns (24)</p>
          <div class="search-block">
            <inputTextControl type="search" placeholder="Search Campaigns"/>
            <CoreButton text="+ Add Campaign"/>
          </div>
      </div>
      <div class="details-section">
        <div class="table-scrollable"> 
          <div class="table-wrapper">
              <TableForm>
                    <template #tableHeader>
                      <TableRow :row-style="2" :is-header="true">
                        <TableCell :is-header="true" class="table-cell-grow-3">
                          <label class="checkbox-wrapper">
                            <input
                              value="checkbox_value"
                              class="checbox__input"
                              type="checkbox"
                              id="checkbox-header"
                              name="name"
                            />
                            <span class="checkmark"></span>
                          </label>
                          Campaign Details
                        </TableCell>
                        <TableCell :is-header="true">Report</TableCell>
                        <TableCell :is-header="true"></TableCell>
                        <TableCell :is-header="true"></TableCell>
                        <TableCell :is-header="true"></TableCell>
                        <TableCell :is-header="true"></TableCell>
                        <TableCell :is-header="true"></TableCell>
                      </TableRow>
                    </template>
                    <template #tableBody>
                      <template v-for="(user, index) in loggedInUser.details" :key="index">
                        <TableRow :row-style="2" class="details-row">
                          <TableCell class="table-cell-grow-3">
                            <label class="checkbox-wrapper">
                              <input
                                value="checkbox_value"
                                class="checbox__input"
                                type="checkbox"
                                :id="`checkbox-${index}`"
                                name="name"
                              />
                              <span class="checkmark"></span>
                            </label>
                            <div class="progress-block">
                              <ProgressScore
                                class="project-stage__score"
                                :progress="30"
                                text="30%"
                              />
                            </div>
                            <div class="name-block">
                              <p>{{ user.name }}  <TabIcon /></p>
                              <p><label>Sent on 15 Apr 2023</label><label>5 Sequences</label></p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div class="details sent-details">
                              <p>{{ user.sent  }}</p>
                              <label>Sent</label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div class="details clicked-details">
                              <p>{{ user.clicked }}<sub>19.6%</sub></p>
                              <label>Clicked</label>
                            </div>  
                          </TableCell>
                          <TableCell>
                            <div class="details opened-details">
                              <p>{{ user.opened }}<sub>39.8%</sub></p>
                              <label>Opened</label>
                            </div>
                          </TableCell
                          >
                          <TableCell>
                            <div class="details replied-details">
                              <p>{{ user.replied }}<sub>12.4%</sub></p>
                              <label>Replied</label>
                          </div>
                          </TableCell>
                          <TableCell>
                            <div class="details postive-details">
                              <p>{{ user.positive_reply }}<sub>0.0%</sub></p>
                              <label>Positive Reply</label>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div class="details-options">
                              <div class="options-wrap"><IconPause /></div>
                              <div class="options-wrap"><IconEdit /></div>
                              <div class="options-wrap"><IconMore /></div>
                            </div>
                          </TableCell>
                        </TableRow>
                      </template>
                    </template>
                  </TableForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style  lang="sass" scoped>
.wrapper
  display: flex
  flex: 1
  flex-direction: column
  .logo-section 
    background-color: #00056A
    height: 80px
.dashboard-wrap
  display: flex
  flex: 1
  .sidebar
    background-color: #fff
    border-right: 1px solid rgba(225, 227, 239, 1)
    display: flex
    flex-direction: column
    justify-content: space-between
    flex: 1
    width: 100%
    max-width: 230px
    .sidebar-section
      display: flex
      flex-direction: column
      margin: 20px 0
      .menu-options.details-options
        display: flex
        padding-left: 16px
        gap: 18px
        height: 40px
        align-items: center
        p
          font-size: 14px
          color: rgba(40, 43, 66, 1)
        .options-wrap
            width: 20px
            height: 20px
      .router-link-active
        &:hover
          background: rgba(117, 122, 233, 0.1)
          color: rgba(40, 43, 66, 1)     
      .router-link-exact-active
        background: rgba(117, 122, 233, 0.1)
        color: rgba(40, 43, 66, 1)
  .right-section
    background: linear-gradient(0deg, #F7F8FE, #F7F8FE), linear-gradient(0deg, #FFFFFF, #FFFFFF)
    flex: 1

  
.details-section
  padding: 15px   
  background: #fff
.table-scrollable
  overflow-x: auto
  flex: 1
  box-shadow: 0px 2px 10px 0px rgb(20 20 20 / 5%)
  @media (max-width: 992px)
    width: 100%
.table-wrapper
  @media (max-width: 992px)
    width: 120rem
.table-cell-grow-3
  flex-grow: 3
  gap: 19px
.checkbox-wrapper
  display: flex
  position: relative
  cursor: pointer
  width: 15px
  height: 15px
  flex-shrink: 0

.checkbox-wrapper input
  display: none

.checkmark
  display: block
  position: relative
  height: 100%
  width: 100%
  border-radius: 0.2rem
  background-color: #fff
  border: 1px solid #DADCE0

.checkbox-wrapper input:checked ~ .checkmark
  background-color: #6E58F1
  border: 0.1rem solid transparent

.checkmark:after
  content: ""
  position: absolute
  display: none

.checkbox-wrapper input:checked ~ .checkmark:after
  display: block

.checkbox-wrapper .checkmark:after
  top: 50%
  left: 50%
  width: 29%
  height: 55%
  border: solid #fff
  transform: rotate(45deg) translate(-120%,-22%)
  border-width: 0 0.18rem 0.18rem 0
.name-block 
  display: flex
  flex-direction: column
  align-items: baseline
  p
    display: flex
    align-items: center
    &:first-child
      font-size: 15px
      color: #6E58F1
      font-weight: 700
      gap: 10px
      svg
        width: 14px
        height: 14px
    &:last-child
      font-size: 14px
      color: rgba(40, 43, 66, 0.6)
      gap: 5px
      font-weight: 300
      position: relative
      padding-left: 15px
      &:before
        content: ""
        background: rgba(94, 202, 57, 1)
        width: 6px
        border-radius: 100%
        height: 6px
        position: absolute
        left: 0
      label
        &:last-child
          display: flex
          align-items: center
          gap: 5px
          &:before
            content: ""
            width: 1px
            height: 9px
            background-color: rgba(150, 152, 163, 1)
            display: flex
.details
  display: flex
  flex-direction: COLUMN
  gap: 1px
  p
    font-size: 20px
    position: relative
    sub
      font-size: 14px
      color: rgba(40, 43, 66, 0.6)
      position: absolute
      bottom: 3px
      margin-left: 4px
  label
    font-size: 14px
    color: rgba(40, 43, 66, 0.6)
.clicked-details
  p
    color: rgba(238, 183, 40, 1)
.sent-details
  p
    color: rgba(110, 88, 241, 1)
.opened-details
  p
    color: rgba(191, 81, 193, 1)
.replied-details
  p
    color: rgba(81, 193, 193, 1)
.postive-details 
  p
    color: rgba(44, 219, 40, 1)
.details-options     
  flex-direction: row
  display: flex
  gap: 10px
  .options-wrap
    background-color: rgba(229, 231, 249, 1)
    width: 36px
    height: 36px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 3px
    border: 1px solid #DADCE0

.details-row
  transition: all .2s
  &:hover
    background: rgba(117, 122, 233, 0.1)
    color: rgba(40, 43, 66, 1)
.search-section
  display: FLEX
  border-bottom: 1px solid rgba(225, 227, 239, 1)
  justify-content: space-between
  align-items: center
  padding: 12px 15px
  background: #fff
  .search-block
    display: flex
    align-items: center
    gap: 30px
    input
      background-color: rgba(250, 250, 255, 1)
      border-radius: 3px
      height: 36px !important
    button
      max-width: 147px
      width: 100%
      margin: 0
</style>