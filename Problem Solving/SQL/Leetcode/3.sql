SELECT
  DISTINCT V.customer_id,
  COUNT(V.customer_id) AS count_no_trans
FROM
  Visits V
  LEFT JOIN Transactions T ON T.visit_id = V.visit_id
WHERE
  V.visit_id NOT IN (
    SELECT
      visit_id
    FROM
      Transactions
  )
GROUP BY
  V.customer_id;