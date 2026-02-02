<script setup>
import ProfileCard from "./components/ProfileCard.vue";
import profilePic from "./assets/profile.jpg";
import bgPic from "./assets/background.jpg";
const myProfile = {
  background: bgPic,
  profileimg: profilePic,
  name: "Thanawat Li",
  subheading: "Student, 20, BKK",
  followers: "245",
  following: "504",
  projects: "50+",
  facebook: "https://www.facebook.com/thanawat.tong.16",
  instagram: "https://www.instagram.com/_octtong?igsh=aThsdnp6emIxbmR5&utm_source=qr",
  linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
};
</script>

<template>
  <div class="flex items-center justify-center gap-8 min-h-screen bg-linear-to-br from-green-500 to-sky-400">
    <ProfileCard :profileimg="myProfile.profileimg" :background="myProfile.background" :name="myProfile.name"
      :subheading="myProfile.subheading" :followers="myProfile.followers" :following="myProfile.following"
      :projects="myProfile.projects" />
    <ProfileCard :profileimg="myProfile.profileimg" :background="myProfile.background" :name="myProfile.name"
      :subheading="myProfile.subheading" :facebook="myProfile.facebook" :instagram="myProfile.instagram"
      :linkedin="myProfile.linkedin" />
  </div>
</template>

<style scoped></style>