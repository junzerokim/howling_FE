const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById('map');

  const mockData = [
    [37.295995, 127.147474, 1],
    [37.294587, 127.150755, 2],
    [37.298047, 127.150412, 3],
    [37.386798, 127.119999, 4],
    [37.385033, 127.118709, 5],
    [37.384779, 127.120369, 6],
  ];

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude; // 현재 경도
    const lon = position.coords.longitude; // 현재 위도

    // 지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
      scrollwheel: false,
    };

    const kakaoMap = new kakao.maps.Map(container, options); // 지도를 생성

    for (let i = 0; i < mockData.length; i++) {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(mockData[i][0], mockData[i][1]),
        map: kakaoMap,
      }); // 마커 생성

      marker.setMap(kakaoMap); // 마커 실행

      marker.setDraggable(true);

      kakao.maps.event.addListener(marker, 'click', (mouseEvent) => {
        console.log(mockData[i][2]);
      });
    }

    kakao.maps.event.addListener(kakaoMap, 'click', (mouseEvent) => {
      // 클릭한 위치 경도 위도 가져옴
      const latlng = mouseEvent.latLng;
      kakao.maps.Marker.position = latlng;
      kakao.maps.Marker.map = kakaoMap;
      // marker.addPosition(latlng); // 마커 클릭한 위치로 옮김

      const message = `경도는 ${latlng.getLat().toFixed(6)}이고, 위도는 ${latlng.getLng().toFixed(6)}입니다.`;
      console.log(message);
    });

    // 현재 위치 로직
    function displayMarker(locPosition, message) {
      // 마커 생성
      const locationMarker = new kakao.maps.Marker({
        map: kakaoMap,
        position: locPosition, // 위치는 현재 위치
      });

      const iwContent = message; // 인포윈도우 창 문구
      const iwRemoveable = true; // 인포윈도우 창 닫기

      // 인포윈도우 생성
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      infowindow.open(kakaoMap, locationMarker);

      kakaoMap.setCenter(locPosition);
    }

    if (navigator.geolocation) {
      const locPosition = new kakao.maps.LatLng(lat, lon);
      const message = '내 위치~';
      displayMarker(locPosition, message);
    } else {
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      const message = 'geolocation을 사용할수 없어요..';

      displayMarker(locPosition, message);
    }
  });
}
