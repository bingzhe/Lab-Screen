import { defineComponent, h } from 'vue';
import './headerTab.scss';

const headerTab = defineComponent({
  name: 'HeaderTab',
  setup() {
    return () => {
      return (
        <div class="headerTab">
          <p>实验室安全平台</p>
        </div>
      );
    };
  },
});
export default headerTab;
