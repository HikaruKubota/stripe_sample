# 確認手順

1.
npm start

2.
http://localhost:4242/checkout.html


支払いに認証が必要な場合には、”4000 0025 0000 3155”

支払いが拒否される場合のカード番号は”4000 0000 0000 9995”

# メモ

checkoutの決済画面のカスタムできる項目は

渡すOptionの変更（app.jsを参照）カスタムメッセージや必要項目の追加など可能

カラーリングやロゴ程度でした。
![設定画面](./%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-11-25%2017.04.57.png)

注意書き程度ならある程度は可能だと思われますが、
好きな場所に注意書きをかけるかと言われるとそうでは無い状態です。

注意書き参考
![注意書き参考](./%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-11-25%2017.46.13.png)


# 代替
あらゆる要望を満たす方向で考えるならElementsが適してると思われます。

ライブラリが提供されているからそれをAPI感覚で利用するようです。

https://stripe.com/docs/payments/elements

自由というのは本当に自由のようです。
