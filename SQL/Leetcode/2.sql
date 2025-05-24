SELECT
  A.machine_id,
  ROUND(AVG(B.timestamp - A.timestamp), 3) as processing_time
FROM
  Activity A
  LEFT JOIN Activity B ON A.process_id = B.process_id
WHERE
  A.activity_type = 'start'
  AND B.activity_type = 'end'
  AND A.machine_id = B.machine_id
GROUP BY
  A.machine_id;