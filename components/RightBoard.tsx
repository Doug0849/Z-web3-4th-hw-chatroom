export default function RightBoard({ styles }: any) {
  return (
    <div className={styles.right}>
      <h2>Chatroom 說明</h2>
      <ol>
      <li>一般留言僅需花費gas fee</li>
      <li>第一次將留言設為公告花費為任意出價</li>
      <li>之後每一次要將留言設為公告則需比前次花費更高才可將留言設為公告</li>
      </ol>
    </div>
  );
}
