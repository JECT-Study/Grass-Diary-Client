import stylex from '@stylexjs/stylex';
import { Button, Container } from '@components/index';
import Swal from 'sweetalert2';
import subCharacter from '@icon/subCharacter.png';

const RewardPageStyle = stylex.create({
  titleBanner: {
    backgroundColor: 'rgb(221, 223, 224)',
    padding: '40px',
    width: '100vw',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: {
      default: '1105px',
      '@media (max-width: 1139px)': '95vw',
    },
  },

  rewardInfoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: {
      default: '1105px',
      '@media (max-width: 1139px)': '95vw',
    },
    gap: '900px',
    paddingTop: '20px',
  },
  rewardInfoItem: {
    display: 'flex',
    gap: '30px',
  },

  line: {
    borderBottom: '1px solid rgb(221, 223, 224)',
    width: '1105px',
    paddingTop: '20px',
  },

  rewardListContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: {
      default: '1105px',
      '@media (max-width: 1139px)': '95vw',
    },
  },
  rewardListMonth: {
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '20px 0px 30px 0px',
  },
  rewardListContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  rewardListBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  },
  rewardListLine: {
    borderBottom: '1px solid rgb(221, 223, 224)',
    width: '1105px',
    padding: '5px',
  },
  rewardListDate: {
    color: '#8a8f95',
  },
  rewardListPoint: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
});

const RewardPage = () => {
  const modal = () => {
    Swal.fire({
      title: '테마 상점',
      text: '테마 상점 준비중이에요',
      imageUrl: subCharacter,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      confirmButtonColor: '#28CA3B',
      confirmButtonText: '확인',
    });
  };

  return (
    <Container>
      <section {...stylex.props(RewardPageStyle.titleBanner)}>
        <p
          style={{ fontSize: '30px', fontWeight: 'bold' }}
          {...stylex.props(RewardPageStyle.title)}
        >
          리워드 내역
        </p>
        <p {...stylex.props(RewardPageStyle.title)}>
          내가 쌓은 포인트를 확인 할 수 있어요
        </p>
      </section>
      <section {...stylex.props(RewardPageStyle.rewardInfoContainer)}>
        <article {...stylex.props(RewardPageStyle.rewardInfoItem)}>
          <div>
            <p>잔디</p>
            <div
              style={{
                display: 'flex',
                fontWeight: 'bold',
                fontSize: '20px',
                paddingTop: '5px',
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seedling.png"
                alt="Seedling"
                width="20"
                height="20"
              />
              <p>55</p>
            </div>
          </div>
          <div>
            <p>리워드</p>
            <div
              style={{
                display: 'flex',
                fontWeight: 'bold',
                fontSize: '20px',
                paddingTop: '5px',
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png"
                alt="Party Popper"
                width="20"
                height="20"
              />
              <p>123</p>
            </div>
          </div>
        </article>
        <Button
          text="테마 상점"
          width="110px"
          defaultColor="#2d2d2d"
          hoverColor="#FFF"
          defaultBgColor="#FFFFFF"
          hoverBgColor="#111111"
          border="1px solid #929292"
          onClick={modal}
        />
      </section>
      <span {...stylex.props(RewardPageStyle.line)}></span>
      <section {...stylex.props(RewardPageStyle.rewardListContainer)}>
        <p {...stylex.props(RewardPageStyle.rewardListMonth)}>2024 5월</p>

        <div {...stylex.props(RewardPageStyle.rewardListBox)}>
          <div {...stylex.props(RewardPageStyle.rewardListContent)}>
            <p {...stylex.props(RewardPageStyle.rewardListDate)}>5월 15일</p>
            <p {...stylex.props(RewardPageStyle.rewardListPoint)}>🔥 +10</p>
          </div>
          <span {...stylex.props(RewardPageStyle.rewardListLine)}></span>
        </div>

        <div {...stylex.props(RewardPageStyle.rewardListBox)}>
          <div {...stylex.props(RewardPageStyle.rewardListContent)}>
            <p {...stylex.props(RewardPageStyle.rewardListDate)}>5월 15일</p>
            <p {...stylex.props(RewardPageStyle.rewardListPoint)}>🔥 +10</p>
          </div>
          <span {...stylex.props(RewardPageStyle.rewardListLine)}></span>
        </div>

        <div {...stylex.props(RewardPageStyle.rewardListBox)}>
          <div {...stylex.props(RewardPageStyle.rewardListContent)}>
            <p {...stylex.props(RewardPageStyle.rewardListDate)}>5월 15일</p>
            <p {...stylex.props(RewardPageStyle.rewardListPoint)}>🔥 +10</p>
          </div>
          <span {...stylex.props(RewardPageStyle.rewardListLine)}></span>
        </div>
      </section>
    </Container>
  );
};

export default RewardPage;
