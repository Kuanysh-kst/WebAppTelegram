<template>
    <div class="container">
        <BackLine />
        <FullNameParam />
        <ExperieceParam />
        <AddPhotoParam />
        <JobSelection />
        <RoleSelection />
        <CitySelection />
        <SaveButton />
    </div>
</template>

<script>
import BackLine from '@/components/search/BackLine.vue';
import FullNameParam from '@/components/param/FullNameParam.vue';
import ExperieceParam from '@/components/param/ExperienceParam.vue';
import AddPhotoParam from '@/components/param/AddPhotoParam.vue';
import JobSelection from '@/components/param/JobSelection.vue';
import RoleSelection from '@/components/param/RoleSelection.vue';
import CitySelection from '@/components/param/CitySelection.vue';
import SaveButton from '@/components/buttons/SaveButton.vue';
export default {
    components: {
    BackLine,
    FullNameParam,
    ExperieceParam,
    AddPhotoParam,
    JobSelection,
    RoleSelection,
    CitySelection,
    SaveButton
}
}
</script>