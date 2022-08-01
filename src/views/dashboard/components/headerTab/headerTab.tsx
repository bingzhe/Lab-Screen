import { defineComponent, h } from 'vue';
import './headerTab.scss';

const headerTab = defineComponent({
  name: 'HeaderTab',
  setup() {
    return () => {
      return (
        <div class="headerTab">
          <p>实验室运营监控总览</p>
        </div>
      );
    };
  },
});
export default headerTab;
