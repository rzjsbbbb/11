if ($response && $response.body) {
    let body = JSON.parse($response.body);
    if (body.user && body.user._id === "5f87be620710d40139ab90a3") {
        body.user.nickname = "俺";
        $done({body: JSON.stringify(body)});
    }
}
