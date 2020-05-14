import Badge from "../components/Base/Badge";
import BaseAlert from "../components/Base/BaseAlert";
import BaseButton from "../components/Base/BaseButton";
import BaseCheckbox from "../components/Base/BaseCheckbox";
import BaseInput from "../components/Base/BaseInput";
import BaseDropdown from "../components/Base/BaseDropdown";
import BaseNav from "../components/Base/BaseNav";
import BasePagination from "../components/Base/BasePagination";
import BaseProgress from "../components/Base/BaseProgress";
import BaseRadio from "../components/Base/BaseRadio";
import BaseSlider from "../components/Base/BaseSlider";
import BaseSwitch from "../components/Base/BaseSwitch";
import BaseTable from "../components/Base/BaseTable";
import BaseHeader from "../components/Base/BaseHeader";
import Card from "../components/Base/Card";
import StatsCard from "../components/Base/StatsCard";
import Modal from "../components/Base/Modal";
import TabPane from "../components/Tabs/TabPane";
import Tabs from "../components/Tabs/Tabs";

export default {
    install(Vue) {
        Vue.component(Badge.name, Badge);
        Vue.component(BaseAlert.name, BaseAlert);
        Vue.component(BaseButton.name, BaseButton);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseNav.name, BaseNav);
        Vue.component(BaseDropdown.name, BaseDropdown);
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BasePagination.name, BasePagination);
        Vue.component(BaseProgress.name, BaseProgress);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseSlider.name, BaseSlider);
        Vue.component(BaseSwitch.name, BaseSwitch);
        Vue.component(BaseTable.name, BaseTable);
        Vue.component(BaseHeader.name, BaseHeader);
        Vue.component(Card.name, Card);
        Vue.component(StatsCard.name, StatsCard);
        Vue.component(Modal.name, Modal);
        Vue.component(TabPane.name, TabPane);
        Vue.component(Tabs.name, Tabs);
    },
};